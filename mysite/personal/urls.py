# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf.urls import url, include
from . import views 

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^contact$', views.contact, name='contact'),
    url(r'^about$', views.about, name='about'),
    url(r'^email$', views.email, name='email'),
    url(r'^thanks$', views.thanks, name='thanks'),
    ]
