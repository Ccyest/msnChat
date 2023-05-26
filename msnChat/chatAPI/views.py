from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import User
from .serializer import UserSerializer

# Create your views here.
class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
