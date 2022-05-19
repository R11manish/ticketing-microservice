#for booting our microservices application

echo "hello ser"
minikube start
eval $(minikube docker-env)
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=hello-world
kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=sk_test_51L00S6SDgORO0l79llZqC8eLVeFlHqCaKfONEJzbsS8cfjvNiUPY1ZtrWCA9NnnTJSWdfAJuH4q3rhiJPx7GejJC00ce7kz1Q5
skaffold dev
echo "yippiiii"