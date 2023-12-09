import winston from 'winston';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.prettyPrint(),
        winston.format.colorize({
          all: true,
          colors: {
            debug: 'blue',
            error: 'red',
            info: 'green',
            warn: 'yellow',
          },
        }),
        winston.format.printf((options) => {
          const { level, message, name } = options;
          return `[${name}] ${level}: ${message}`;
        })
      ),
    }),
  ],
});

export const newLogger = (name: string) => {
  return logger.child({ name });
};
