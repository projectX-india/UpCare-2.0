# Generated by Django 3.0.10 on 2020-10-29 21:13

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0016_auto_20201030_0142'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='date_made',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
