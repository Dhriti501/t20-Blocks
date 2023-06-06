from flask import Flask, jsonify,request
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the ML model
joblib_file = "t20_model.pkl"
linmodel = joblib.load(joblib_file)

@app.route('/view-team/', methods=['GET'])
def predict():
    try:
        # Matches, Innings, Runs, High Score, Average, Balls Faced, Strike Rate, 100 (Count), 50 (Count), 4s and 6s
        matches = float(request.args.get('matches'))
        innings = float(request.args.get('innings'))
        runs = float(request.args.get('runs'))
        highscore = float(request.args.get('highscore'))
        avg = float(request.args.get('avg'))
        ballsfaced = float(request.args.get('ballsfaced'))
        strikerate = float(request.args.get('strikerate'))
        hundreds = float(request.args.get('hundreds'))
        fifties = float(request.args.get('fifties'))
        fours = float(request.args.get('fours'))
        sixes = float(request.args.get('sixes'))

        # Predict using the ML model
        prediction = linmodel.predict([[matches,innings, runs, highscore, avg, ballsfaced, strikerate, hundreds, fifties, fours, sixes]])


        # Return prediction as JSON response
        response = {'prediction': prediction[0]}
        return jsonify(response), 200

    except Exception as e:
        # Return error message if there's any exception
        response = {'error': str(e)}
        return jsonify(response), 400


if __name__ == '__main__':
    app.run()