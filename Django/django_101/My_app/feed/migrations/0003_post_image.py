# Generated by Django 3.2.8 on 2021-10-27 17:24

from django.db import migrations
import sorl.thumbnail.fields


class Migration(migrations.Migration):

    dependencies = [
        ('feed', '0002_post_text'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='image',
            field=sorl.thumbnail.fields.ImageField(default='', upload_to=''),
        ),
    ]