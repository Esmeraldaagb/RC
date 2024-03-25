import { logger } from "@api/infra/logger";
import { ERROR_CODE } from "@api/utils/statusCode";

type ResponseOk = {
  status?: boolean;
  data?: any;
};
export const ok = ({ status = true, data = {} }: ResponseOk) => ({
  ok: status,
  data: {
    ...data,
  },
});

export const nok = (
  error: {
    message?: string;
    code: ERROR_CODE;
  },
  code?: ERROR_CODE,
) => {
  logger.error("Error Occurred", {
    errorCode: error.code,
    errorMessage: error.message,
  });
  return {
    ok: false,
    code: code || error.code,
  };
};
