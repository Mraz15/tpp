# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf.urls import url, include
from . import views 

urlpatterns = [
    url(r'^uspto_docs/$', views.uspto_docs, name='uspto_docs'),
    url(r'^exp_foreign/$', views.exp_foreign, name='exp_foreign'),
    url(r'^hand_delivery/$', views.hand_delivery, name='hand_delivery'),

    ]
