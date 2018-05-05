# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def uspto_docs(request):
    return render(request, 'forms/uspto_docs.html')

def exp_foreign(request):
    return render(request, 'forms/exp_foreign.html')

def hand_delivery(request):
    return render(request, 'forms/hand_delivery.html')
