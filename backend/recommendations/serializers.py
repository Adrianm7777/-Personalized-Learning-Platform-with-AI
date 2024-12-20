from rest_framework import serializers
from .models import Recommendation

class RecommendationSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Recommendation
        fields = ["id","user","course_name"]



