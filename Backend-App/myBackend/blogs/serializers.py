
from rest_framework import serializers
from blogs.models import Blogs
# create serializers

class blogSerializers(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Blogs
        # fields = "__all__"  for showing all fields
        fields=('id', 'bid', 'fullName', 'email', 'blogTitle', 'blogDescription')
    