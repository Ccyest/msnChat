from django.db import models

SEX_CHOICES = (
            ('Male', 'Male'),
            ('Female', 'Female'),
            ('Other', 'Other'),
        )

# Create your models here.

class User (models.Model):
    email = models.EmailField(unique=True)
    avatar = models.ImageField(upload_to="msn/image/avatar/",blank=True)
    gender = models.CharField(max_length=20, choices = SEX_CHOICES, blank=True)
    bio = models.TextField(max_length=3000, blank=True)

class Tag (models.Model):
    user = models.ForeignKey(User, related_name='tags', on_delete=models.CASCADE)
    content = models.CharField(max_length=20)


# --------- function ------------ #
