from django.db import models
from users.models import CustomUser
class Recommendation(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="recommendations")
    course_name = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.user.username} - {self.course_name}"


