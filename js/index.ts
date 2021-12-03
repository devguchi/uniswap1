import {ethers} from "ethers";
import {Address} from "cluster";
require('dotenv').config();

const endpoint = process.env.ENDPOINT;
const provider = new ethers.providers.JsonRpcProvider(endpoint);