from django.urls import path
from . import views

urlpatterns = [
    path("notes/", views.Notes, name="notes"),
    path("notes/<str:pk>/", views.NoteDetails, name="note"),
]
