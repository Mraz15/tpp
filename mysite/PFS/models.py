# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Post(models.Model):
	app_num = models.IntegerField()
	pat_num = models.IntegerField()
	title = models.CharField(max_length=140)
	inventor_first = models.CharField(max_length=140)
	inventor_last = models.CharField(max_length=140)

	def __str__(self):
		return self.title

