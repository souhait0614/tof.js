git add .
echo Enter your commit message
read cmt
git commit -m "$cmt"
git push origin dev
git push upstream main