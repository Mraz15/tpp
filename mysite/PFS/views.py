# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Post


rootdir = '/Users/zacmraz/documents/files/Flyin car apps'
app_root = 'uspat:PatentData/uspat:ApplicationData/uscom:ApplicationNumberText'

ns = {'uspat': 'urn:us:gov:doc:uspto:patent', 
	  'uscom': 'urn:us:gov:doc:uspto:common', 
	  'pat': 'http://www.wipo.int/standards/XMLSchema/ST96/Patent',
	  'com': 'http://www.wipo.int/standards/XMLSchema/ST96/Common'
	  }

def index(request):
    return render(request, 'PFS/home.html')

def db(request):
	for subdir, dirs, files in os.walk(rootdir):
		for file in files:
			tree = ET.parse(rootdir + '/' + file)
			root = tree.getroot()
			for app in root.findall(app_root, ns):
				app_num = app.text
				instance = Post.objects.create(app_num=app_num)
				return render(request, 'PFS/home.html')
