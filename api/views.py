from rest_framework.decorators import api_view
from .utils import *

# Create your views here.

@api_view(["GET", "POST"])
def Notes(request):

    if request.method == "GET":
        return getNotesList(request)

    if request.method == "POST":
        return createNotes(request)

@api_view(["GET", "PUT", "DELETE"])
def NoteDetails(request, pk):

    if request.method == 'GET':
        return getNoteContent(request, pk)

    if request.method == 'PUT':
        return updateNote(request, pk)

    if request.method == 'DELETE':
        return deleteNote(request, pk)