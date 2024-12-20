from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Recommendation
from .serializers import RecommendationSerialzer

class RecommendationView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        recommendations = Recommendation.objects.filter(user=request.user)
        serializer = RecommendationSerialzer(recommendations, many =True)
        return Response({"recommendations":serializer.data})

    def post(self,request):
        data = request.data
        data["user"] = request.user.id
        serializer = RecommendationSerialzer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors,status=400)
