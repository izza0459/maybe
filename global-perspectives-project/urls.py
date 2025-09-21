from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('primary-research/', views.primary_research, name='primary_research'),
    path('secondary-research/', views.secondary_research, name='secondary_research'),
]
