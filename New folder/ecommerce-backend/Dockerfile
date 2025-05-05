# Dockerfile
FROM maven:3.9.4-eclipse-temurin-17 AS builder      # build stage with JDK & Maven :contentReference[oaicite:10]{index=10}
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests                  # produce fat jar

FROM eclipse-temurin:17-jre-alpine                  # slim runtime image
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]                # run the Spring Boot app :contentReference[oaicite:11]{index=11}
