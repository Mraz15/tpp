# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import smtplib

from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'personal/home.html')

def about(request):
    return render(request, 'personal/about.html')

def contact(request):
    return render(request, 'personal/contact.html')

def email(request):
	# docNum = request.GET.get('docNum')
	# cert = request.GET.get('cert')
	# message = docNum + cert
	server = smtplib.SMTP('smtp.gmail.com:587')
	server.starttls()
	server.login('patentplaceorder@gmail.com','Froggy2018!')
	problems = server.sendmail('patentplaceorder@gmail.com', 'info@thepatentplace.com', 'it worked')
	server.quit()
	return render(request, 'personal/email.html')
