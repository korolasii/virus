from gtts import gTTS

text = gTTS("Троянская программа является самым опасным типом вирусов, так как она маскируется в других безвредных программах. И до того момента как пользователь не запустит эту самую безвредную программу,  троян не несет никакой опасности и обнаружить его нелегко. Троянская программа может нанести различный ущерб для компьютера. В основном трояны используются для кражи, изменения или удаления личных данных пользователя. Отличительной особенностью вируса-трояна является то, что он не может самостоятельно размножаться.")
text.save('Trojan.mp3')