# Generated by Django 2.2.14 on 2020-07-08 11:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0003_customtext_tests"),
    ]

    operations = [
        migrations.RemoveField(model_name="customtext", name="tests",),
    ]
