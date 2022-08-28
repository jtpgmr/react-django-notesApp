### Default Serializer Import ###
from rest_framework.serializers import ModelSerializer

# from rest_framework_mongoengine.serializers import DocumentSerializer

from .models import Note

class NoteSerializer(ModelSerializer):
# class NoteSerializer(DocumentSerializer):
  class Meta:
    model = Note
    fields = "__all__"

