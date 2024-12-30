from django.urls import path
from .views import get_recommendation

urlpatterns = [
    path("recommendations/", get_recommendation, name= "recommendations")
]