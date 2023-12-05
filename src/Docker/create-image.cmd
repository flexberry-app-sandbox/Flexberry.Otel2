docker build --no-cache -f SQL\Dockerfile.PostgreSql -t otel2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t otel2/app ../..
