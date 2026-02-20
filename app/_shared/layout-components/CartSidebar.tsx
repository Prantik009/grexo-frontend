"use client";

import Image from "next/image";
import { Trash2, Minus, Plus, IndianRupee } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "../cart/hooks/useCart";

const FREE_DELIVERY_LIMIT = 999;

export default function CartSidebar({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (v: boolean) => void;
}) {
    const {
        cart,
        isLoading,
        updateItem,
        removeItem,
        isUpdating,
        isRemoving,
    } = useCart();

    const items = cart?.items ?? [];
    const subtotal = cart?.subtotal ?? 0;
    const totalItems = cart?.totalItems ?? 0;

    const freeDeliveryLeft = FREE_DELIVERY_LIMIT - subtotal;

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="right"
                className="w-full sm:w-140 flex flex-col p-2"
            >
                {/* HEADER */}
                <div className="h-[5%] space-y-1">
                    <h2 className="text-lg font-semibold">
                        Cart {totalItems > 0 && `(${totalItems})`}
                    </h2>

                    {subtotal >= FREE_DELIVERY_LIMIT ? (
                        <p className="text-sm text-success">
                            Yay! You’re getting Free Delivery 🎉
                        </p>
                    ) : (
                        <p className="text-sm text-muted-foreground">
                            Add ₹{freeDeliveryLeft} more to get Free Delivery
                        </p>
                    )}
                </div>

                {/* ITEMS */}
                <div className="flex-1 overflow-y-auto py-4 space-y-4">
                    {isLoading ? (
                        <p className="text-center text-sm text-muted-foreground">
                            Loading cart...
                        </p>
                    ) : items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center gap-2">
                            <p className="text-lg font-medium">
                                Your cart feels lonely 🌱
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Explore our green collections and bring life home.
                            </p>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div
                                key={item.productId}
                                className="flex gap-3 p-3 rounded-xl border bg-card"
                            >
                                {/* Image */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={72}
                                    height={72}
                                    className="rounded-lg object-contain"
                                />

                                {/* Details */}
                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium">{item.title}</p>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-2">
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            disabled={isUpdating}
                                            onClick={() =>
                                                updateItem({
                                                    productId: item.productId,
                                                    quantity: item.quantity - 1,
                                                })
                                            }
                                        >
                                            <Minus size={14} />
                                        </Button>

                                        <span className="text-sm">{item.quantity}</span>

                                        <Button
                                            size="icon"
                                            variant="outline"
                                            disabled={isUpdating}
                                            onClick={() =>
                                                updateItem({
                                                    productId: item.productId,
                                                    quantity: item.quantity + 1,
                                                })
                                            }
                                        >
                                            <Plus size={14} />
                                        </Button>
                                    </div>

                                    {/* Price */}
                                    <div className="text-sm">
                                        ₹{item.price}
                                    </div>
                                </div>

                                {/* Delete */}
                                <button
                                    disabled={isRemoving}
                                    onClick={() => removeItem(item.productId)}
                                    className="self-start text-muted-foreground hover:text-destructive"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* FOOTER */}
                {items.length > 0 && (
                    <div className="h-[20%] border-t pt-4 space-y-3">
                        <p className="text-xs text-muted-foreground">
                            Use code <b>SAVE10</b> at checkout · 10% OFF
                        </p>

                        <p className="text-xs text-muted-foreground">
                            7-day hassle-free replacement on damaged plants
                        </p>

                        <div className="flex justify-between text-sm font-medium">
                            <span>Total</span>
                            <span>₹{subtotal}</span>
                        </div>

                        <Button className="w-full h-12 text-base">
                            <IndianRupee size={18} />
                            Checkout · ₹{subtotal}
                        </Button>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}
