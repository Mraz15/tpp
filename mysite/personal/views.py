# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import smtplib

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
import smtplib
import json
from django.conf import settings
# Create your views here.

def index(request):
    return render(request, 'personal/home.html')

def about(request):
    return render(request, 'personal/about.html')

def contact(request):
    return render(request, 'personal/contact.html')

def email(request):
    json_data = json.loads(request.body)
    docNum =  json_data.get('docNum')
    docType =  json_data.get('docType')
    cert =  json_data.get('cert')
    legal =  json_data.get('legal')
    # these arent being sent from cert3 yet
    # docMed =  json_data.get('docMed')
    # copies =  json_data.get('copies')
    cost =  json_data.get('cost')

    SUBJECT = "New Order Submitted"
    text = ('Document Number: ' + str(docNum) + " ,\n"
    +  'Type: ' + str(docType) + " ,\n" 
    + 'Certified: ' +  str(cert) + " ,\n" 
    +  'Legalized: ' + str(legal) + " ,\n" 
    +  'Total Cost: ' + str(cost))

    BODY = "\r\n".join([
        "From: %s" % settings.FROM_EMAIL,
        "To: %s" % settings.TO_EMAIL,
        "Subject: %s" % SUBJECT ,
        "",
        text
        ])


    try:
        server = smtplib.SMTP(settings.SMTP_HOST_AND_PORT)
        server.starttls()
        server.login(settings.SMTP_USERNAME,settings.SMTP_PASSWORD)
        server.sendmail(settings.FROM_EMAIL, settings.TO_EMAIL, BODY)
        server.quit()
    except:
        return HttpResponse('Failed')
    return HttpResponse('Success')
