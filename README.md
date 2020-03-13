# Start
- Copy the file ``.env.example`` to ``.env``
  - ``cp .env.example .env``

# Google Pub/Sub
- Export your credential json file from the Google Console Account
- Save google credential json file on the ``auth`` directory
- Set the json filename on the ``.env`` configuration file
- https://cloud.google.com/pubsub/docs/authentication#service-accounts

# Testing
- Create a topic using the GCP console or gcloud CLI
- Add a subscription to the topic created
- Set all the configurations on the ``.env`` file

# Start Producer 
``npm run-script dev:producer``

# Start Consumer 
``npm run-script dev:consumer``

# Start Producer and Consumer
``npm run-script dev``