from django.shortcuts import render

def home(request):
    return render(request,'index1.html')


def sponsers(request):
    return render(request,'gallery/gallery.html')


def alumni(request):
    return render(request, 'gallery/alumni.html')


def miscellaneous(request):
    return render(request, 'gallery/miscellaneous.html')

def hackathon(request):
    return render(request, 'gallery/hackathon.html')