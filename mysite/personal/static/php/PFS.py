import sqlite3
import lxml.etree as ET
import os, re, subprocess



conn = sqlite3.connect('PairBulkData.db')
c = conn.cursor()


rootdir = '/Users/zacmraz/documents/files/Flyin car apps'
app_root = 'uspat:PatentData/uspat:ApplicationData/uscom:ApplicationNumberText'

ns = {'uspat': 'urn:us:gov:doc:uspto:patent', 
	  'uscom': 'urn:us:gov:doc:uspto:common', 
	  'pat': 'http://www.wipo.int/standards/XMLSchema/ST96/Patent',
	  'com': 'http://www.wipo.int/standards/XMLSchema/ST96/Common'
	  }


def create_table():
	c.execute('CREATE TABLE IF NOT EXISTS PairBulkData(title TEXT, app_num INTEGER, pat_num INTEGER, inventor_first TEXT, inventor_last TEXT)')

def dynamic_data_entry():
	for subdir, dirs, files in os.walk(rootdir):
		for file in files:
			tree = ET.parse(rootdir + '/' + file)
			root = tree.getroot()
			for app in root.findall(app_root, ns):
				app_num = app.text
				for patent in app.findall('../uspat:PatentGrantIdentification/pat:PatentNumber', ns):
					pat_num = patent.text
				for title in app.findall('../pat:InventionTitle', ns):
					title = title.text
				for FirstName in app.findall('../pat:PartyBag/pat:InventorBag/pat:Inventor/com:PublicationContact/com:Name/com:PersonName/com:PersonStructuredName/com:FirstName', ns):
					inventor_first = FirstName.text
				for LastName in app.findall('../pat:PartyBag/pat:InventorBag/pat:Inventor/com:PublicationContact/com:Name/com:PersonName/com:PersonStructuredName/com:LastName', ns):
					inventor_last = LastName.text
				c.execute("INSERT INTO PairBulkData (title, app_num, pat_num, inventor_first, inventor_last) VALUES(?, ?, ?, ?, ?)", 
					(title, app_num, pat_num, inventor_first, inventor_last))
				conn.commit()

def read_from_db():
	search = raw_input()
	c.execute("SELECT * FROM PairBulkData WHERE app_num = '"+search+"' OR pat_num = '"+search+"' OR title = '"+search+"' OR inventor_first = '"+search+"' OR inventor_last = '"+search+"' ")
	#data = c.fetchall()
	#print(data)
	for row in c.fetchall():
		print row
	

#create_table()
#dynamic_data_entry()
read_from_db()


