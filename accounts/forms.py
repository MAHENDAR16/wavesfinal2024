from django import forms
from .models import Account

class Registrationform(forms.ModelForm):

    password = forms.CharField(widget = forms.PasswordInput(attrs={
            'placeholder': 'Enter Password',
    }))

    confirm_password = forms.CharField(widget = forms.PasswordInput(attrs={
            'placeholder': 'Confirm Password',
    }))
    
    class Meta:
        model = Account#SPECIFYING THE MODEL FOR WHICH THE FORM IS USED
        fields = ['first_name','last_name','phone_number','email','password']#these fields are those that are stored in django admin model

    def __init__(self,*args,**kwargs):
        super(Registrationform,self).__init__(*args,**kwargs)
        self.fields['first_name'].widget.attrs['placeholder'] = 'Enter First Name'
        self.fields['last_name'].widget.attrs['placeholder'] = 'Enter Last Name'
        self.fields['phone_number'].widget.attrs['placeholder'] = 'Enter Phone Number'
        self.fields['email'].widget.attrs['placeholder'] = 'Enter Email Address'
        for field in self.fields:
            self.fields[field].widget.attrs['class'] = 'form-control'
    
    def clean(self):
        cleaned_data = super(Registrationform,self).clean()
        password = cleaned_data.get('password')
        confirm_password = cleaned_data.get('confirm_password')

        if password != confirm_password:
            raise forms.ValidationError(
                "Password does not match!"
            )

