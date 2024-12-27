
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import os

class PersonalizedLearningModel:
    def __init__(self):
        self.model = RandomForestClassifier()
        self.data_file = "user_learning_data.csv"

    def load_data(self):
        if os.path.exists(self.data_file):
             return pd.read_csv(self.data_file)
        return pd.DataFrame(columns=["user_id","topic", "difficulty","score"])
    
    def save_data(self,data):
        data.to_csv(self.data_file, index=False)

    def train(self):
        data = self.load_data()
        if not data.empty:
            X = data[["topic","difficulty"]]
            Y = data["score"]
            self.model.fit(X,Y)

    def predict(self, user_id,topic):
        data = self.load_data()
        user_data = data[data["user_id"] == user_id]
        if user_data.empty:
            return "Easy"
        avg_dfficulty = user_data["difficulty"].mean()
        return "Medium" if avg_dfficulty < 3 else "Hard"
    
    def update_user_data(self,user_id,topic,difficulty,score):
        data =self.load_data()
        data = pd.concat([data, pd.DataFrame([{
            'user_id': user_id,
            'topic': topic,
            'difficulty': difficulty,
            'score': score
        }])])
        self.save_data(data)
        self.train()


