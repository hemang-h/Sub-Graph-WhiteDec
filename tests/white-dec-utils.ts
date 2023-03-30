import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  Funding,
  Published,
  Transfer,
  UpdatePaper
} from "../generated/WhiteDec/WhiteDec"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createFundingEvent(
  from: Address,
  to: Address,
  amount: BigInt,
  paperId: BigInt,
  totalAmountFunded: BigInt
): Funding {
  let fundingEvent = changetype<Funding>(newMockEvent())

  fundingEvent.parameters = new Array()

  fundingEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  fundingEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  fundingEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fundingEvent.parameters.push(
    new ethereum.EventParam(
      "paperId",
      ethereum.Value.fromUnsignedBigInt(paperId)
    )
  )
  fundingEvent.parameters.push(
    new ethereum.EventParam(
      "totalAmountFunded",
      ethereum.Value.fromUnsignedBigInt(totalAmountFunded)
    )
  )

  return fundingEvent
}

export function createPublishedEvent(
  paperId: BigInt,
  tokenUri: string,
  author: string,
  owner: Address,
  allowFunding: boolean,
  fundAmount: BigInt
): Published {
  let publishedEvent = changetype<Published>(newMockEvent())

  publishedEvent.parameters = new Array()

  publishedEvent.parameters.push(
    new ethereum.EventParam(
      "paperId",
      ethereum.Value.fromUnsignedBigInt(paperId)
    )
  )
  publishedEvent.parameters.push(
    new ethereum.EventParam("tokenUri", ethereum.Value.fromString(tokenUri))
  )
  publishedEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromString(author))
  )
  publishedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  publishedEvent.parameters.push(
    new ethereum.EventParam(
      "allowFunding",
      ethereum.Value.fromBoolean(allowFunding)
    )
  )
  publishedEvent.parameters.push(
    new ethereum.EventParam(
      "fundAmount",
      ethereum.Value.fromUnsignedBigInt(fundAmount)
    )
  )

  return publishedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createUpdatePaperEvent(
  paperId: BigInt,
  allowFunding: boolean,
  amount: BigInt
): UpdatePaper {
  let updatePaperEvent = changetype<UpdatePaper>(newMockEvent())

  updatePaperEvent.parameters = new Array()

  updatePaperEvent.parameters.push(
    new ethereum.EventParam(
      "paperId",
      ethereum.Value.fromUnsignedBigInt(paperId)
    )
  )
  updatePaperEvent.parameters.push(
    new ethereum.EventParam(
      "allowFunding",
      ethereum.Value.fromBoolean(allowFunding)
    )
  )
  updatePaperEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return updatePaperEvent
}
