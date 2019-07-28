# HTML 웹에 Google Login API 적용하기
작성자 : 홍지연

## 1. Go to the Ggoogle API Console

1. [Google API Console](https://developers.google.com/identity/sign-in/web/sign-in#before_you_begin) 에 들어가서 configure a project 클릭

2. create a new project 
(프로젝트는 12개로 한정되어 있음)


## 2. 사용자 인증 정보 만들기

1. [사용자 인증 정보](https://console.cloud.google.com/apis) 사용자 인증정보 만들기 - OAuth 클라이언트 ID 선택

2. 웹 애플리케이션 선택 - 이름 및 url 설정 (ex. localhost:3030 or localhost:8080)

3. 생성된 OAuth 클라이언트 ID 확인 및 복사

4. 구글 API ID 붙여넣기 & 스크립트 추가
```html
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta name="google-signin-scope" content="profile email">
    <meta name="google-signin-client_id" content="구글API ID.apps.googleusercontent.com">
    <script src="https://apis.google.com/js/platform.js" async defer></script>
</head>
<body>
    <div>Lorem ipsum</div>
    <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark">dfd</div>
    <script>
        function onSignIn(googleUser) {
            // Useful data for your client-side scripts:
            var profile = googleUser.getBasicProfile();
            console.log("ID: " + profile.getId()); // Don't send this directly to your server!
            console.log('Full Name: ' + profile.getName());
            console.log('Given Name: ' + profile.getGivenName());
            console.log('Family Name: ' + profile.getFamilyName());
            console.log("Image URL: " + profile.getImageUrl());
            console.log("Email: " + profile.getEmail());

            // The ID token you need to pass to your backend:
            var id_token = googleUser.getAuthResponse().id_token;
            console.log("ID Token: " + id_token);
        };
    </script>
</body>
</html>
```

