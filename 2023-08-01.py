import pandas as pd

data = pd.read_csv('./my_data.csv')

col = list(data.columns)
col[0] = 'index'
data.columns = col
data = data.drop('index', axis=1)


def name_translation(name):
    name_dict = {
        'Alice': '앨리스',
        'Bob': '밥',
        'Charlie': '찰리',
        'james': '제임스'
    }
    return name_dict.get(name)


data['name'] = data['name'].apply(name_translation)
data['salary'] = data['salary'].apply(lambda x: format(x, ','))
data.reset_index(drop=True, inplace=True)

print(data)

data.to_csv('new_my_data.csv', index=False)
