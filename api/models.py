from django.db import models

# from mongoengine import Document, fields
# from datetime import datetime

# Create your models here.

# Default Note Model (sqlite)
class Note(models.Model):
  body = models.TextField(null=True, blank=True)
  created = models.DateTimeField(auto_now_add=True)
  updated= models.DateTimeField(auto_now=True)

  def __str__(self): 
    return self.body[0:50]

# MongoDB Note Model
# class Note(Document):
#   body = fields.StringField()
#   created = fields.DateTimeField(required=True, default=datetime.utcnow)
#   updated= fields.DateTimeField(required=True, default=datetime.utcnow)

#   def __str__(self): 
#     return self.body[0:50]