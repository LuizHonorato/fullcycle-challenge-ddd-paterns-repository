import express, { Request, Response } from "express";
import CreateCustomerUseCase from "../../../usecase/customer/create/create.customer.usecase";
import ListCustomerUseCase from "../../../usecase/customer/list/list.customer.usecase";
import CustomerRepository from "../../customer/repository/sequelize/customer.repository";
import CustomerPresenter from "../presenters/customer.presenter";

export const customerRoute = express.Router();

customerRoute.post('/', async (request: Request, response: Response) => {
    const usecase = new CreateCustomerUseCase(new CustomerRepository());

    try {
        const customerDto = {
            name: request.body.name,
            address: {
                street: request.body.address.street,
                number: request.body.address.number,
                zip: request.body.address.zip,
                city: request.body.address.city,
            },
        };

        const output = await usecase.execute(customerDto);

        response.send(output);
    } catch (error) {
        console.log(error)
        response.status(500).send(error);
    }
});

customerRoute.get('/', async (request: Request, response: Response) => {
    try {
        const usecase = new ListCustomerUseCase(new CustomerRepository());
        const output = await usecase.execute({});

        response.format({
            json: async () => response.send(output),
            xml: async() => response.send(CustomerPresenter.toXML(output))
        })

        response.send(output);
    } catch (error) {
        response.status(500).send(error);
    }
});