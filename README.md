# Tutorial: Build a Flask app with Azure Cognitive Services

With this sample, you'll build a Flask web app that uses Azure Cognitive Services to translate text, analyze sentiment, and synthesize translated text into speech. If you run into any issues, let us know by submitting and issue.

## What is Flask?

Flask is a microframework for creating web applications. This means Flask provides you with tools, libraries, and technologies that allow you to build a web application. This web application can be some web pages, a blog, a wiki or go as substantive as a web-based calendar application or a commercial website.

For those of you who want to deep dive after this tutorial here are a few helpful links:

* [Flask documentation](http://flask.pocoo.org/)
* [Flask for Dummies - A Beginner's Guide to Flask](https://codeburst.io/flask-for-dummies-a-beginners-guide-to-flask-part-uno-53aec6afc5b1)

## Prerequisites

Let's review the software and subscription keys that you'll need for this tutorial.

* [Python 3.5.2 or later](https://www.python.org/downloads/)
* [Git tools](https://git-scm.com/downloads)
* An IDE or text editor, such as [Visual Studio Code](https://code.visualstudio.com/) or [Atom](https://atom.io/)  
* [Chrome](https://www.google.com/chrome/browser/) or [Firefox](https://www.mozilla.org/firefox)
* A **Translator Text** subscription key in the **West US** region.
* A **Text Analytics** subscription key in the **West US** region.
* A **Speech Services** subscription key in the **West US** region.

## Create an account and subscribe to resources

As previously mentioned, you're going to need three subscription keys for this tutorial. This means that you need to create a resource within your Azure account for:

* Translator Text
* Text Analytics
* Speech Services

Use [Create a Cognitive Services Account in the Azure portal](https://docs.microsoft.com/azure/cognitive-services/cognitive-services-apis-create-account) for step-by-step instructions to create resources.

**IMPORTANT NOTE**: For this tutorial, please create your resources in the West US region. If using a different region, you'll need to adjust the base URL in each of your Python files.

## Clone the sample

This is pretty straightforward, clone this repository:

```
git clone https://github.com/MicrosoftTranslator/Text-Translation-API-V3-Flask-App-Tutorial.git
```

## Create and activate your virtual environment with `virtualenv`

Let's create a virtual environment for our Flask app using `virtualenv`. Using a virtual environment ensures that you have a clean environment to work from.

1. In your working directory (where you cloned the repo), run this command to create a virtual environment:
   **macOS/Linux:**
   ```
   virtualenv venv --python=python3
   ```
   We've explicitly declared that the virtual environment should use Python 3. This ensures that users with multiple Python installations are using the correct version.

   **Windows CMD / Windows Bash:**
   ```
   virtualenv venv
   ```
   To keep things simple, we're naming your virtual environment venv.

2. The commands to activate your virtual environment will vary depending on your platform/shell:   

   | Platform | Shell | Command |
   |----------|-------|---------|
   | macOS/Linux | bash/zsh | `source venv/bin/activate` |
   | Windows | bash | `source venv/Scripts/activate` |
   | | Command Line | `venv\Scripts\activate.bat` |
   | | PowerShell | `venv\Scripts\Activate.ps1` |

   After running this command, your command line or terminal session should be prefaced with `venv`.

3. You can deactivate the session at any time by typing this into the command line or terminal: `deactivate`.

**NOTE**: Python has extensive documentation for creating and managing virtual environments, see [virtualenv](https://virtualenv.pypa.io/en/latest/).

## Install `requests`

Requests is a popular module that is used to send HTTP 1.1 requests. There’s no need to manually add query strings to your URLs, or to form-encode your POST data.

1. To install requests, run:

   ```
   pip install requests
   ```

**NOTE**: If you'd like to learn more about requests, see [Requests: HTTP for Humans](http://docs.python-requests.org/en/master/).

## Install and configure `Flask`

Next we need to install Flask. Flask handles the routing for our web app, and allows us to make server-to-server calls that hide our subscription keys from the end user.

1. To install Flask, run:
   ```
   pip install Flask
   ```
   Let's make sure Flask was installed. Run:
   ```
   flask --version
   ```
   The version should be printed to terminal. Anything else means something went wrong.

2. To run the Flask app, you can either use the flask command or Python’s -m switch with Flask. Before you can do that you need to tell your terminal which app to work with by exporting the `FLASK_APP` environment variable:

   **macOS/Linux**:
   ```
   export FLASK_APP=app.py
   ```

   **Windows**:
   ```
   set FLASK_APP=app.py
   ```

## Run the sample

Now that you're all set up, follow these instructions to run the sample. If you'd like a detailed walkthrough of the Python, HTML, and Javascript that pulls this app together, see [Tutorial: Build a Flask app with Cognitive Services](https://docs.microsoft.com/azure/cognitive-services/translator/tutorial-flask-translation-and-synthesis).

1. Open `translate.py` and add your Translator Text subscription key.
2. Open `sentiment.py` and add your Text Analytics subscription key.
3. Open `synthesize.py` and your Speech Services subscription key.
4. Run:
   ```
   flask run
   ```
5. Navigate to the URL provided and test your app.

## Clean up

When you're done with the sample, don't forget to remove your subscription keys. Consider reading from environment variables.

## Next steps

* [Translator Text API reference](https://docs.microsoft.com/azure/cognitive-services/Translator/reference/v3-0-reference)
* [Text Analytics API reference](https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3c7)
* [Text-to-speech API reference](https://docs.microsoft.com/azure/cognitive-services/speech-service/rest-text-to-speech)
