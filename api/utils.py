from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializer
from datetime import datetime

# api/notes/
def getNotesList(request):
  notes = Note.objects.all().order_by("-updated")
  serializer = NoteSerializer(notes, many=True)
  return Response(serializer.data)

def createNotes(request):
  data = request.data
  note = Note.objects.create(
    body=data["body"]
  )
  serializer = NoteSerializer(note, many=False)
  return Response(serializer.data)


# api/notes/<str:pk>
def getNoteContent(request, pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)

def updateNote(request, pk):
    data = request.data
    data["updated"] = datetime.utcnow()
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data)

    if serializer.is_valid():
      serializer.save()

    return Response(serializer.data)

def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('Note was deleted!')