from rest_framework import serializers
from .models import  PersonalizedLearningModel

class RecommendationSerialzer(serializers.ModelSerializer):
    class Meta:
        model =  PersonalizedLearningModel
        fields = ["id","user","course_name"]



