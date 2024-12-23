from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserRegistrationSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = UserRegistrationSerializer

class LogoutView(APIView):
    permission_classes = [AllowAny]

    def post(self,request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "username": request.user.username,
            "email": request.user.email,
        })