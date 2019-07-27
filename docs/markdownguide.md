# 마크다운 작성법

## 마크다운 문법

1. 제목(Header) : <h1> ~ <h6> 태그

       # 제목1

       ## 제목2

       ### 제목3

       #### 제목4

       ##### 제목5

 2.  강조 : <strong>, <em>, <del>, <u>

      두껍게 : **텍스트**   /   __*텍스트__*

      이텔릭체 : **텍스트**   /   _텍스트_

      취소선 : ~~텍스트~~

      밑줄 : <u>텍스트</u>

 3.  목록 : <ol>, <ul>

      순서가 필요한 목록 : 1. 텍스트  2. 텍스트  3. 텍스트 ...

      순서가 필요없는 목록 : - 텍스트  /   * 텍스트   /    + 텍스트

 4.  링크 : <a>

      [텍스트](https://google.com)

      [텍스트](https://naver.com "링크 설명(title)을 작성하세요.")

      [상대적참조](../login 과 같은 상대경로 써주기)

      

    ** 다음과 같이 문서 내 일반 URL이나 꺽쇠 괄호(`< >`, Angle Brackets)안의 URL은 자동으로 링크를 사용합니다.

    구글 : httsp://google.com

    네이버 : <https://naver.com>

    ** 아래는 분리해서 작성할 경우

    [google][google link]

    [google link]: [https://google.com](https://dribbble.com/)

    [1]: [https://github.com](https://github.com/)

    [GitHub][1]