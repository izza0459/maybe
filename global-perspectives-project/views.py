from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def primary_research(request):
    return render(request, 'primary_research.html')

def secondary_research(request):
    return render(request, 'secondary_research.html')
