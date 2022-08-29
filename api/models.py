from mongoengine import Document, fields
from datetime import datetime

# Create your models here.

class Note(Document):
  body = fields.StringField()
  created = fields.DateTimeField(required=True, default=datetime.utcnow)
  updated= fields.DateTimeField(required=True, default=datetime.utcnow)

  def __str__(self): 
    return self.body[0:50]