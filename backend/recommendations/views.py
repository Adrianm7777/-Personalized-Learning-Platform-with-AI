from django.http import JsonResponse
from .models import PersonalizedLearningModel

model = PersonalizedLearningModel()

def get_recommendation(request):
      user_id = request.GET.get("user_id")
      topic = request.GET.get("topic")

      if not user_id or not topic:
            return JsonResponse({'error': 'Missing parameters'}, status=400)
      
      recommendation = model.predict(user_id, topic)
      return JsonResponse({"reccomendation":recommendation})