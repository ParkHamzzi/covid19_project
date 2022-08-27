import requests
from bs4 import BeautifulSoup

def get_corona_summary():
    url = "http://ncov.mohw.go.kr/"
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'}
    res = requests.get(url,headers=headers)

    soup = BeautifulSoup(res.text,'lxml')
    # print(soup)

    # 확진환자/완치/치료중/사망 수 가져오기
    peoples = soup.select('.ds_table tr td span')

    results={
        '사망' : int(peoples[0].text.replace(',','')),
        '재원위중증' : int(peoples[1].text.replace(',','')),
        '신규입원' : int(peoples[2].text.replace(',','')),
        '확진' : int(peoples[3].text.replace(',','')),
    }
    # print(results)
    return results

# 파이썬에서 __name__ 변수는 내부적으로 사용되는 특별한 변수 이름입니다. 
# 위의 예제에서 python taeng.py와 같이 직접 taeng.py 파일을 실행하는 경우에는
#  __name___ 변수에 __main__ 이라는 값이 할당됩니다.

# 프로그래밍 언어의 소스 코드를 바로 실행하는 컴퓨터 프로그램 또는 환경

# 테스트 용 코드
if __name__ == "__main__":
    print(get_corona_summary())


#매개 변수(파라미터)란, 함수를 정의할때 사용되는 변수를 의미한디,