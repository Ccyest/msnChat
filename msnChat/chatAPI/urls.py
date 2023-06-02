
from django.urls import path, include
from .views import AddUserView,ListUserView
urlpatterns = [
    path('add',AddUserView.as_view()),
    path('list',ListUserView.as_view())
]
