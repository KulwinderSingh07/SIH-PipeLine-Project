from flask import Flask,jsonify
from flask_cors import CORS, cross_origin
app=Flask(__name__)

# print(os.getenv("HOST"))
app=Flask(__name__)
CORS(app)
flowdata=[
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 00:00:00",
        "flow_rate": 8.186324560756441
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 00:15:00",
        "flow_rate": 8.186324560760923
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 00:30:00",
        "flow_rate": 9.876750394251108
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 00:45:00",
        "flow_rate": 9.876750394274898
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 01:00:00",
        "flow_rate": 8.186324560794144
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 01:15:00",
        "flow_rate": 6.509319804540788
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 01:30:00",
        "flow_rate": 9.876750394269967
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 01:45:00",
        "flow_rate": 6.509319804563873
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 02:00:00",
        "flow_rate": 8.1863245607874
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 02:15:00",
        "flow_rate": 8.186324560778505
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 02:30:00",
        "flow_rate": 8.186324560784433
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 02:45:00",
        "flow_rate": 6.509319804542708
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 03:00:00",
        "flow_rate": 9.876750394275215
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 03:15:00",
        "flow_rate": 8.186324560767186
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 03:30:00",
        "flow_rate": 9.87675039426388
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 03:45:00",
        "flow_rate": 6.509319804538559
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 04:00:00",
        "flow_rate": 9.876750394257163
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 04:15:00",
        "flow_rate": 9.876750394261208
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 04:30:00",
        "flow_rate": 9.87675039426798
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 04:45:00",
        "flow_rate": 9.87675039424229
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 05:00:00",
        "flow_rate": 6.509319804559435
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 05:15:00",
        "flow_rate": 6.509319804553552
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 05:30:00",
        "flow_rate": 6.509319804544045
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 05:45:00",
        "flow_rate": 8.186324560762168
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 06:00:00",
        "flow_rate": 6.509319804552777
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 06:15:00",
        "flow_rate": 9.876750394267573
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 06:30:00",
        "flow_rate": 8.186324560772492
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 06:45:00",
        "flow_rate": 8.18632456079738
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 07:00:00",
        "flow_rate": 6.5093198045484195
    },
    {
        "node_name": "hostel_D",
        "timestamp": "2023-01-01 07:15:00",
        "flow_rate": 9.87675039424417
    }
]

current_index = 0



# Define API endpoint to get data one by one
@app.route('/api/get_data', methods=['GET'])
def get_data():
    global current_index

    if current_index < 0 or current_index >= len(flowdata):
        return jsonify({"error": "Invalid index"}), 404

    current_object = flowdata[current_index]
    current_index = (current_index + 1) % len(flowdata)

    return jsonify(current_object)

# app.config.from_prefixed_env()
@app.route("/")
def welcome():
    return "HEllo word"

# from controller import product_controller,user_controller

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)