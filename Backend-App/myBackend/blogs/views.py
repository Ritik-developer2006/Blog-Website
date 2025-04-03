from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from blogs.models import Blogs
from blogs.serializers import blogSerializers

# Create your views here.
class blogViewSet(viewsets.ModelViewSet):
    queryset = Blogs.objects.all()
    serializer_class=blogSerializers