from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name = 'home'),
    path('about-us', views.about, name = 'about'),
    path('faq', views.faq, name = 'faq'),
]
